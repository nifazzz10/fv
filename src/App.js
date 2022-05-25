import "./styles.css";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function App() {
  const docs = [
    { uri: require("../public/file-sample_500kB.doc") },
    { uri: require("../public/c4611_sample_explain.pdf") },
    { uri: require("../public/sample.numbers") }
  ];

  return (
    <div className="App">
      <h1>Sample react-doc-viewer</h1>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false
          }
        }}
        style={{ height: 500 }}
      />
    </div>
  );
}
