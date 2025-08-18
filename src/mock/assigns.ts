import { Assign } from 'type/assign';

export const mockAssign: Assign = {
  id: 1,
  title: 'E-commerce Dashboard Requirements',
  status: 'draft',
  tags: ['UI', 'Web', 'Dashboard'],
  overview:
    `과제형 프로젝트 안내사항

• GUI 화면의 에셋과 정확히 똑같이 클론 코딩을 진행해주세요.
• 화면 설계서의 상세 요구사항을 기반으로 개발을 진행해주세요.
• 제공된 스크린샷과 동일한 UI/UX를 구현해야 합니다.
• 모든 인터랙션과 상태 변화는 명세서에 따라 정확히 동작해야 합니다.
• 반응형 디자인을 적용하여 다양한 디바이스에서 동작하도록 구현해주세요.
• 코드는 깔끔하고 유지보수 가능하도록 작성해주세요.
• 컴포넌트는 재사용 가능하도록 설계해주세요.

⚠️ 주의사항:
- 디자인의 픽셀 퍼펙트 구현을 목표로 해주세요.
- 사용자 경험을 고려한 세밀한 인터랙션을 구현해주세요.
- 접근성을 고려한 마크업을 작성해주세요.`,
  userFlows: [
    {
      id: 1,
      title: '사용자 로그인 플로우',
      steps: [
        {
          id: 1,
          title: '아이디 입력창 타이핑',
          description: `a) 아무 값도 타이핑하지 않는다.
: 디폴트 입력창으로 둔다간다.

b) 20자 이하로 타이핑한다.
: 입력한 이름이 입력창에 잘 보여진다.

c) 20자 초과로 타이핑한다.
: 20자까지만 입력되고, 그 이후의 입력값은 입력되지 않는다.

d) 엔터를 타이핑한다.
: 줄바꿈은 입력되지 않고, 아무값도 입력되지 않는다.

e) 아이디만 타이핑한다.
: 로그인 버튼이 비활성화 상태가 되고, 클릭이 불가해진다.`,
          screenshot: '/screenshots/login-0.png',
        },
        {
          id: 2,
          title: '비밀번호 입력창 타이핑',
          description: `a) 아무 값도 타이핑하지 않는다.
: 디폴트 입력창으로 둔다간다.

b) 20자 이하로 타이핑한다.
: 입력한 이름이 입력창에 잘 보여지고,
'비밀번호 표시' 문구가 나타난다.

c) 20자 초과로 타이핑한다.
: 20자까지만 입력되고, 그 이후의 입력값은 입력되지 않는다

d) 엔터를 입력한다.
: 줄바꿈은 입력되지 않고, 로그인 버튼 클릭과 동일한 이벤트가 발생한다.

e) 비밀번호만 타이핑한다.
: 로그인 버튼이 비활성화 상태가 되고, 클릭이 불가해진다.

f) 아이디 1자리, 비밀번호 6자리 이상 타이핑한다.
: 활성화 상태로 변경되고, 클릭이 가능해진다.`,
          screenshot: '/screenshots/login-1.png',
        },
        {
          id: 3,
          title: '탭 키 동작',
          description: `a) 아이디 입력창에서 탭을 누른다.
: 비밀번호 입력창으로 포커스가 이동한다.

b) 비밀번호 입력창에서 탭을 누른다.
: 로그인 버튼으로 포커스가 이동한다.

c) 로그인 버튼에서 탭을 누른다.
: 아이디 입력창으로 포커스가 이동한다.

d) Shift + 탭을 누른다.
: 역순으로 포커스가 이동한다.`,
          screenshot: '/screenshots/login-2.png',
        },
        {
          id: 4,
          title: '로그인 버튼 클릭',
          description: `a) 올바른 아이디와 비밀번호를 입력하고 클릭한다.
: 메인 대시보드 페이지로 이동한다.

b) 잘못된 아이디 또는 비밀번호를 입력하고 클릭한다.
: "아이디 또는 비밀번호가 올바르지 않습니다" 에러 메시지가 표시된다.

c) 빈 입력창 상태에서 클릭한다.
: "아이디와 비밀번호를 입력해주세요" 메시지가 표시된다.

d) 로딩 상태에서 추가 클릭한다.
: 버튼이 비활성화되고 추가 요청이 방지된다.`,
          screenshot: '/screenshots/login-3.png',
        },
      ],
    },
    {
      id: 2,
      title: 'User Dashboard Flow',
      steps: [
        {
          id: 1,
          title: 'Login Page',
          description: 'User lands on login page with email and password fields',
          screenshot: null,
        },
        {
          id: 2,
          title: 'Credential Input',
          description: 'User enters credentials and submits',
          screenshot: null,
        },
        {
          id: 3,
          title: 'Validation Process',
          description: 'Backend validates and redirects to dashboard',
          screenshot: null,
        },
      ],
    },
    {
      id: 3,
      title: 'User Order Flow',
      steps: [
        {
          id: 1,
          title: 'Login Page',
          description: 'User lands on login page with email and password fields',
          screenshot: null,
        },
        {
          id: 2,
          title: 'Credential Input',
          description: 'User enters credentials and submits',
          screenshot: null,
        },
        {
          id: 3,
          title: 'Validation Process',
          description: 'Backend validates and redirects to dashboard',
          screenshot: null,
        },
      ],
    },
  ],
};

export const fetchAssignById = (id: number): Assign => {
  // 목데이터 반환 (동기 함수로 단순화)
  return mockAssign;
};
