import AssignOverviewReadonly from 'components/assign/AssignOverviewReadonly';
import AssignStepCardReadonly from 'components/assign/AssignStepCardReadonly';
import UserFlowBlockReadonly from 'components/assign/UserFlowBlockReadonly';
import { fetchAssignById } from 'mock/assigns';

const AssignViewPage = () => {
  const assign = fetchAssignById(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-8">
          <AssignOverviewReadonly assign={assign} title="Screen Flows & Logic" />

          {assign.userFlows.map((userFlow) => (
            <UserFlowBlockReadonly
              key={userFlow.id}
              title={userFlow.title}
              stepsCount={userFlow.steps.length}
            >
              <div className="mt-6">
                {userFlow.steps.map((step, idx) => (
                  <AssignStepCardReadonly key={step.id} step={step} index={idx + 1} />
                ))}
              </div>
            </UserFlowBlockReadonly>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignViewPage;
