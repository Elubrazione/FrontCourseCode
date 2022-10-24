import * as React from "react"
import * as ReactDOM from "react-dom/client"


function Test() {
  return <div>test</div>
}

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <Test />
)
