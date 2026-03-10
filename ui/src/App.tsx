import { RouterProvider } from 'react-router-dom';
import { getRouter } from '@/app/router'; //router 폴더의 index를 가져옴
import { useAuthStore } from '@/features/auth/model/use-auth-store';

function App() {

  //1. Zustand를 이용해 로그인 상태 실시간 확인
  const { isLoggedIn } = useAuthStore();

  //2. 로그인 상태를 넣어 필요한 주소 가져옴
  const router = getRouter(isLoggedIn);

  //3. RouterProvider에서 만든 주소를 넣어 앱을 실행
  return <RouterProvider router={router} />;
}

export default App
