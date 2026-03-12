import { useTranslation } from 'react-i18next';

export const usePageTranslation = () => {
    const { t, i18n } = useTranslation();

    //번역키가 없으면 기본값 그대로 출력
    return { 
        t: (key: string, defaultValue: string) => t(key, defaultValue), 
        changeLanguage: (lang: string) => i18n.changeLanguage(lang)
    }
}