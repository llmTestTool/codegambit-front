import React from 'react';
import { fetchAssignById } from 'mock/assigns';
import AssignHeader from 'components/assign/AssignHeader';
import AssignOverview from 'components/assign/AssignOverview';
import AssignStepCard from 'components/assign/AssignStepCard';
import UserFlowBlock from 'components/assign/UserFlowBlock';

const AssignEditPage = () => {
  const assign = fetchAssignById(1);

  return (
    <div className="min-h-screen px-6">
      <div className="mx-auto max-w-5xl">
        <AssignHeader assign={assign} />

        <div className="space-y-8">
          <AssignOverview assign={assign} title="Screen Flows & Logic" />

          <UserFlowBlock
            title="User Authentication Flow"
            stepsCount={assign.steps.length}
          >
            <div className="mt-4">
              {assign.steps.map((step, idx) => (
                <AssignStepCard key={step.id} step={step} index={idx + 1} />
              ))}
            </div>
          </UserFlowBlock>

          <div className="rounded-lg border bg-white p-4">
            {/* 복사된 섹션 예시 2번째 블록 */}
            <AssignOverview
              assign={assign}
              title="User Authentication Flow"
              stepsCount={assign.steps.length}
            />
            <div className="mt-4">
              {assign.steps.map((step, idx) => (
                <AssignStepCard
                  key={`copy-${step.id}`}
                  step={step}
                  index={idx + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignEditPage;
