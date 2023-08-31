import { interpolate, linkVertical, scaleOrdinal, schemeBrBG, schemeSet3, select, stratify, tree } from "d3"
import { watch } from "vue"


const s = stratify().id((d: any) => d.name).parentId((d: any) => d.parent)
const colour = scaleOrdinal(schemeSet3)
const l = linkVertical().x(d => d.x).y(d => d.y)

function linkTween(d: any) {
  const x = interpolate(d.source.x, d.target.x) 
  const y = interpolate(d.source.y, d.target.y) 
  return function(t: any) {
    return l({source: d.source, target: {...d.target, x: x(t), y: y(t)}})
  }
}

export function useTreeSelection(data: any, size: [number, number]) {
  const t = tree().size(size)

  watch(data, () => {
    select('.graph').selectAll('.node').remove()
    select('.graph').selectAll('.link').remove()

    const rootNode = s(data)
    const treeData = t(rootNode)
    const nodes = select('.graph').selectAll('.node').data(treeData.descendants())
    const links = select('.graph').selectAll('.link').data(treeData.links())

    links.enter().append('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', 'rgb(217 119 6)')
      .attr('stroke-width', 2)
      .transition().duration(750)
        .attrTween('d', d => linkTween(d))

    const enterNodes = nodes.enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`)

    enterNodes.append('rect')
      .attr('fill', d => colour(d.data.department))
      .attr('stroke', 'rgb(120 53 15)')
      .attr('stroke-width', 3)
      .attr('rx', 10)
      .attr('height', 0)
      .attr('width', 0)
      .transition().duration(750)
        .attr('height', 50)
        .attr('width', (d: any) => d.data.name.length * 20)
        .attr('transform', (d: any) => `translate(-${d.data.name.length * 10}, -30)`)

    enterNodes.append('text')
      .attr('text-anchor', 'middle')
      .attr('fill', 'rgb(120 53 15)')
      .text((d: any) => d.data.name)
      .attr('font-size', 0)
      .transition().duration(750)
        .attr('font-size', '18px')
  })
}
