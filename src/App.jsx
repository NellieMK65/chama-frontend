import { useEffect, useState } from 'react';
import { UserDetails } from './components/UserDetails';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/users', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((result) => setUsers(result))
			.catch((error) => console.log('error', error));
	}, []);

	return (
		<main className="p-8">
			<ul role="list" class="divide-y divide-gray-100">
				{users.map((user) => (
					<UserDetails key={user.id} {...user} />
				))}
			</ul>
		</main>
	);
}

export default App;
