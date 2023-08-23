import { user, users } from '../store/user';
import { useStore } from '@nanostores/react';

const UserTable = () => {
	const $user = useStore(user);
	const $users = useStore(users);
	const setUser = (u) => {
		user.set(u);
	};
	const deleteUser = (id) => {
		users.set(
			$users.map((u) => {
				if (u._id !== id) {
					return u;
				}
			})
		);
	};

	return (
		<div className="relative rounded-xl overflow-auto">
			<div className="shadow-sm overflow-hidden my-8">
				<table className="border-collapse table-auto w-full text-sm">
					<thead>
						<tr>
							<th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
								Name
							</th>
							<th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
								Email
							</th>
							<th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
								Password
							</th>
							<th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
								Edit
							</th>
							<th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
								Delete
							</th>
						</tr>
					</thead>
					<tbody className="bg-white dark:bg-slate-800">
						{$users.map((u) => {
							return (
								u && (
									<tr>
										<td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
											{u.name}
										</td>
										<td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
											{u.email}
										</td>
										<td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
											{u.password}
										</td>
										<td>
											<button
												onClick={() => setUser(u)}
												type="submit"
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											>
												Edit
											</button>
										</td>
										<td>
											<button
												onClick={() => deleteUser(u._id)}
												type="submit"
												className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
											>
												Delete
											</button>
										</td>
									</tr>
								)
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserTable;
