const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            users: null,
            characters: null,
            planets: null,
            ships: null,
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
            },
            traer: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characters: data["results"] }));
			},
            traerPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: data["results"] }));
			},
        }
    }
}

export default getState;