import { useState } from "react";
import { Select } from "./components/Select";
import { SelectOption } from "./types/selectTypes";
import { options } from "./utils/data";

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <div>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </div>
  );
}

export default App;
