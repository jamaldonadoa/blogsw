const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            products: [
                { id: 1, title: 'Product 1', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
                { id: 2, title: 'Product 2', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
                { id: 3, title: 'Product 3', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" }
            ],
            users: null,
        },
        actions: {
            getFullName: () => {
                const { name, lastname } = getStore();
                return `${name} ${lastname}`;
            },
            getUsers: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ users: data }))
            },

            getPosts: url => {
                return fetch(url);
            }

        }
    }
}

export default getState;