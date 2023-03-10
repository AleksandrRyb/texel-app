export interface IScheme {
  name: string;
  title: string;
  description: string;
  parameters: {
    input: InputParametr[];
    output?: OutputParametr[];
  };
  commands: Commands;
}

export interface InputParametr {
  type: 'number' | 'select';
  name: 'input_num' | 'input_text';
  title: string;
  items?: InputItem[];
}

export interface OutputParametr {
  type: string;
  name: string;
  title: string;
}

export interface InputItem {
  value: string;
  title: string;
}

interface Commands {
  start: string;
}
