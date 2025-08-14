import React from 'react';
import { fetchAssignById } from 'mock/assigns';
import AssignHeader from 'components/assign/AssignHeader';
import AssignOverview from 'components/assign/AssignOverview';
import AssignStepCard from 'components/assign/AssignStepCard';
import UserFlowBlock from 'components/assign/UserFlowBlock';

const AssignEditPage = () => {
  const assign = fetchAssignById(1);

  return (
    <div>
      <AssignHeader assign={assign} />

      <div className="space-y-8">
        <AssignOverview assign={assign} title="Screen Flows & Logic" />

        <UserFlowBlock
          title="User Authentication Flow"
          stepsCount={assign.steps.length}
          assign={''}
        >
          <div className="mt-6">
            {assign.steps.map((step, idx) => (
              <AssignStepCard key={step.id} step={step} index={idx + 1} />
            ))}
          </div>
        </UserFlowBlock>
      </div>
    </div>
  );
};

export default AssignEditPage;
