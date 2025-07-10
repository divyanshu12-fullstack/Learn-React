import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createRoot } from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
