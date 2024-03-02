import { useEffect, useState } from 'react';

export const getAvatarUrl = (gender: string, size: number = 300) => encodeURI(`https://source.unsplash.com/random/${size}x${size}/?${gender} portrait`);

export const useAvatar = (gender: string, size: number = 300) => {
	const [avatar, setAvatar] = useState<string>('');

	useEffect(() => {
		fetch(getAvatarUrl(gender, size), { method: 'HEAD' })
			.then((response) => {
				const finalUrl = response.url ?? response.headers.get('location');
				setAvatar((v) => (v ? v : finalUrl ?? ''));
			})
			.catch((error) => console.error('Error:', error));
	}, [gender, size]);

	return avatar;
};
