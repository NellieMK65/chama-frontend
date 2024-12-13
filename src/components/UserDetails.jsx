export function UserDetails({ name, email, phone, created_at }) {
	return (
		<li class="flex justify-between gap-x-6 py-5">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="size-12 flex-none rounded-full bg-gray-50"
					src={`https://ui-avatars.com/api/?name=${name}&background=random`}
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm/6 font-semibold text-gray-900">{name}</p>
					<p class="mt-1 truncate text-xs/5 text-gray-500">{email}</p>
				</div>
			</div>
			<div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
				<p class="text-sm/6 text-gray-900">{phone}</p>
				<p class="mt-1 text-xs/5 text-gray-500">
					Date created {new Date(created_at).toDateString()}
				</p>
			</div>
		</li>
	);
}
