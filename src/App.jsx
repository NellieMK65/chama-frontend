import { useEffect, useState } from 'react';
import { UserDetails } from './components/UserDetails';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://chama-backend-kqu9.onrender.com/users', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((result) => setUsers(result))
			.catch((error) => console.log('error', error));
	}, []);

	return (
		<main className="p-8">
			<ul role="list" className="divide-y divide-gray-100">
				{users.map((user) => (
					<UserDetails key={user.id} {...user} />
				))}
			</ul>
			{/* <img
				src={user.avatar}
				alt=""
			/> */}
		</main>
	);
}

export default App;
