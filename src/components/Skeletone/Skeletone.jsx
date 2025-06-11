import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#dbdbdb"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="9" y="47" rx="0" ry="0" width="118" height="11" /> 
    <rect x="11" y="67" rx="0" ry="0" width="400" height="124" /> 
    <rect x="12" y="202" rx="0" ry="0" width="180" height="25" /> 
    <rect x="13" y="245" rx="17" ry="17" width="144" height="51" />
  </ContentLoader>
)

export default MyLoader;