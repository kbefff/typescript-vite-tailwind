import SummaryItem from './SummaryItem';

const Summary = ({ tasks }: { tasks: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex justify-between bg-red-800">
      <SummaryItem itemName={'Total'} itemValue={3} />
      <SummaryItem itemName={'To do'} itemValue={0} />
      <SummaryItem itemName={'Done'} itemValue={3} />
    </div>
  );
};

export default Summary;
