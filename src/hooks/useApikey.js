const useApikey = (link, payload) => `${link}key=${import.meta.env.VITE_API_KEY}&q=${payload}`

export default useApikey