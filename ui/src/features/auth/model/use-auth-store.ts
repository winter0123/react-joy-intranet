import { create } from 'zustand'; //로그인 정보 기억용

//저장소에 담을 내용들의 목록(변수명:타입)
interface AuthState {
    isLoggedIn: boolean; //로그인했는지 여부
    login: () => void; //로그인 함수
    logout: () => void; //로그아웃 함수
}

//실제로 정보를 담고 있는 저장소
export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false, //첫 상태
  login: () => set({ isLoggedIn: true }), //로그인 함수 실행시
  logout: () => set({ isLoggedIn: false }), //로그아웃 함수 실행시
}));