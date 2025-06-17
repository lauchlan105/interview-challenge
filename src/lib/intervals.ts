import { SupplyPointDataResponse } from '../schema';


const sumIntervalData = (
  supplyPointResponse: SupplyPointDataResponse,
): number => {
  const {data} = supplyPointResponse
  const nodes = data.supplyPoint.meterIntervalData.edges.map(({ node }) => node)
  const sum = nodes.reduce((sum, node) => sum += Number.parseInt(node.block), 0)
  return sum
};

export const Intervals = {
  sumIntervalData
}
