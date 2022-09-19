const useAuthorized = () => {

    const checkLogin = () => {
        return !!localStorage.getItem('token');
    }

    return checkLogin();;
}

export default useAuthorized;