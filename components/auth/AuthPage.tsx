import React, { useState } from 'react';
import { MealPlansIcon } from '../icons';
import { t } from '../../utils/i18n';

interface AuthPageProps {
    onLoginSuccess: () => void;
    language: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess, language }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('admin@mealpro.com');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (email === 'admin@mealpro.com' && password === 'password') {
            onLoginSuccess();
        } else {
            setError(t(language, 'auth_invalid_credentials'));
        }
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setError(t(language, 'auth_signup_not_implemented'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-dark-bg">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-dark-sidebar">
                <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4">
                        <MealPlansIcon className="h-10 w-10 text-primary" />
                        <span className="ml-3 text-3xl font-bold text-gray-800 dark:text-white">MealPro</span>
                    </div>
                    <h2 className="text-xl text-center text-gray-600 dark:text-gray-400">
                        {isLoginView ? t(language, 'auth_sign_in_to_account') : t(language, 'auth_create_new_account')}
                    </h2>
                </div>

                <div className="flex border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setIsLoginView(true)}
                        className={`w-1/2 py-4 text-sm font-medium text-center transition-colors duration-200 ${isLoginView ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                        {t(language, 'auth_sign_in')}
                    </button>
                    <button
                        onClick={() => setIsLoginView(false)}
                        className={`w-1/2 py-4 text-sm font-medium text-center transition-colors duration-200 ${!isLoginView ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                        {t(language, 'auth_sign_up')}
                    </button>
                </div>

                {isLoginView ? (
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="sr-only">{t(language, 'auth_email_address')}</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                placeholder={t(language, 'auth_email_address')}
                            />
                        </div>
                        <div>
                            <label htmlFor="password-login" className="sr-only">{t(language, 'password')}</label>
                            <input
                                id="password-login"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                placeholder={t(language, 'password')}
                            />
                        </div>
                        {error && <p className="text-sm text-center text-red-500">{error}</p>}
                        <div>
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                {t(language, 'auth_sign_in')}
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                         <div>
                            <label htmlFor="name" className="sr-only">{t(language, 'full_name')}</label>
                            <input id="name" name="name" type="text" required className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600" placeholder={t(language, 'full_name')} />
                        </div>
                        <div>
                            <label htmlFor="email-signup" className="sr-only">{t(language, 'auth_email_address')}</label>
                            <input id="email-signup" name="email" type="email" required className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600" placeholder={t(language, 'auth_email_address')} />
                        </div>
                        <div>
                            <label htmlFor="password-signup" className="sr-only">{t(language, 'password')}</label>
                            <input id="password-signup" name="password" type="password" required className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600" placeholder={t(language, 'password')} />
                        </div>
                         {error && <p className="text-sm text-center text-red-500">{error}</p>}
                        <div>
                            <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary hover:bg-indigo-700">
                                {t(language, 'auth_create_account')}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthPage;