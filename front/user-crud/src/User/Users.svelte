<script>
    import {GRAPHQL_BASE_URL} from "../../constants.js";

    let query = `
     query {
       getUsers {
         name
         surname
         age
       }
     }
`;
    let users = [];
    let loading = true;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query})
    };


    async function fetchData() {
        try {
            const data = await fetch(GRAPHQL_BASE_URL, options)
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.log(error));
            users = data.data.getUsers;
            loading = false;
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();
</script>

<main>
    <h1>Users List</h1>

    {#if loading}
        <p>Loading...</p>
    {:else}
        <ul>
            {#each users as user}
                <li>{user.name} {user.surname} ({user.age})</li>
            {/each}
        </ul>
    {/if}

</main>

<style>
</style>