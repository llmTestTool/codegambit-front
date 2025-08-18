import AssignHeader from 'components/assign/AssignHeader';
import AssignOverview from 'components/assign/AssignOverview';
import AssignStepCard from 'components/assign/AssignStepCard';
import UserFlowBlock from 'components/assign/UserFlowBlock';
import { fetchAssignById } from 'mock/assigns';

const AssignEditPage = () => {
  const assign = fetchAssignById(1);

  return (
    <div>
      <AssignHeader assign={assign} />

      <div className="space-y-8">
        <AssignOverview assign={assign} title="Screen Flows & Logic" />

        <UserFlowBlock
          title={assign.userFlows[0].title}
          stepsCount={assign.userFlows[0].steps.length}
          assign={''}
        >
          <div className="mt-6">
            {assign.userFlows[0].steps.map((step, idx) => (
              <AssignStepCard key={step.id} step={step} index={idx + 1} />
            ))}
          </div>
        </UserFlowBlock>
        
        <UserFlowBlock
          title={assign.userFlows[1].title}
          stepsCount={assign.userFlows[1].steps.length}
          assign={''}
        >
          <div className="mt-6">
            {assign.userFlows[1].steps.map((step, idx) => (
              <AssignStepCard key={step.id} step={step} index={idx + 1} />
            ))}
          </div>
        </UserFlowBlock>

        <UserFlowBlock
          title={assign.userFlows[2].title}
          stepsCount={assign.userFlows[2].steps.length}
          assign={''}
        >
          <div className="mt-6">
            {assign.userFlows[2].steps.map((step, idx) => (
              <AssignStepCard key={step.id} step={step} index={idx + 1} />
            ))}
          </div>
        </UserFlowBlock>
      </div>
    </div>
  );
};

export default AssignEditPage;
