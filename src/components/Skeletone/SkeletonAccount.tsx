import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonAccount = (props) => (
  <ContentLoader 
    speed={2}
    width={1240}
    height={800}
    viewBox="0 0 1240 800"
    backgroundColor="#dbdbdb"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="14" y="43" rx="3" ry="3" width="247" height="21" /> 
    <rect x="15" y="75" rx="3" ry="3" width="304" height="21" /> 
    <rect x="14" y="107" rx="3" ry="3" width="128" height="21" /> 
    <rect x="15" y="136" rx="3" ry="3" width="304" height="21" /> 
    <rect x="16" y="167" rx="3" ry="3" width="304" height="21" /> 
    <rect x="17" y="198" rx="3" ry="3" width="541" height="64" /> 
    <rect x="18" y="275" rx="3" ry="3" width="439" height="21" /> 
    <rect x="21" y="320" rx="3" ry="3" width="320" height="21" /> 
    <rect x="363" y="320" rx="3" ry="3" width="32" height="24" />
  </ContentLoader>
)

export default SkeletonAccount

