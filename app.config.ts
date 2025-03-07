export default defineAppConfig({
	ui: {
		primary: 'blue',
		gray: 'cool',
		modal: {
			overlay: {
				background: 'bg-[rgba(0,0,70,0.30)]',
				transition: {
					enter: 'duration-300 ease-out',
					enterFrom: 'opacity-0',
					enterTo: 'opacity-100',
					leave: 'duration-200 ease-in',
					leaveFrom: 'opacity-100',
					leaveTo: 'opacity-0'
				}
			},
			width: 'xl:max-w-[1270px] sm:max-w-full sm:w-full',
			rounded: 'rounded-[155px]',
			background: 'bg-transparent',
			padding: 'p-0 sm:p-0',
			transition: {
				enter: 'duration-300 ease-out',
				enterFrom: 'opacity-0',
				enterTo: 'opacity-100',
				leave: 'duration-200 ease-in',
				leaveFrom: 'opacity-100',
				leaveTo: 'opacity-0'
			},
		},
		input: {
			default: {
				size: 'md',
				color: 'gray',
				variant: 'outline',
				class: 'rounded-sm bg-white h-[56px]',
				inputClass: 'rounded-sm bg-white h-[56px]',
				container: 'relative',
				input: 'block w-full rounded-sm bg-white h-[56px] border-[#E9E8E8]'
			}
		}
	}
})
