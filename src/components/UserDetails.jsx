export function UserDetails({ name, email, phone, created_at }) {
	return (
		<li className="flex justify-between gap-x-6 py-5">
			<div className="flex min-w-0 gap-x-4">
				<img
					className="size-12 flex-none rounded-full bg-gray-50"
					src={`https://ui-avatars.com/api/?name=${name}&background=random`}
					alt=""
				/>
				<div className="min-w-0 flex-auto">
					<p className="text-sm/6 font-semibold text-gray-900">
						{name}
					</p>
					<p className="mt-1 truncate text-xs/5 text-gray-500">
						{email}
					</p>
				</div>
			</div>
			<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
				<p className="text-sm/6 text-gray-900">{phone}</p>
				<p className="mt-1 text-xs/5 text-gray-500">
					Date created {new Date(created_at).toDateString()}
				</p>
			</div>
		</li>
	);
}
