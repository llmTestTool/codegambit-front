import AssignCard from './AssignCard';
import { assignCardDto } from '../../type/assignlist/assignCardDto';

interface Props {
  mockCardsData: assignCardDto[];
}

const AssignCardGrid = ({mockCardsData}: Props) => {
  return (
    <div className="flex flex-wrap gap-6">
      {mockCardsData.map((card) => (
        <AssignCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default AssignCardGrid;