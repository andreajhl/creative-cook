import { TableProps } from '@/interfaces/components/ui/Table';

const Table = ({ headers, rows }: TableProps) => {
  return (
    <table className="table-auto w-full border-y border-t-stone-200">
      <thead>
        <tr>
          { headers.map((text: string) => <th key={text} className="text-left">{text}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, index) => (
            <tr key={index}>
              { Object.values(row).map(item => <td key={item}>{item}</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
