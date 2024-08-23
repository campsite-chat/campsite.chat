import Image from 'next/image'
import Link from 'next/link'

export default function TechStackSection() {
	return (
		<section
			id="clients"
			className="mx-auto max-w-7xl px-6 text-center md:px-8"
		>
			<div className="py-14">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="text-center text-sm font-semibold text-gray-600">
						BUILT WITH SECURITY, SPEED, AND STYLE IN MIND
					</h2>
					<div className="mt-6">
						<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
							<li>
								<Link href="https://www.rust-lang.org/" target="_blank">
									<Image
										alt="Rust"
										src="/logos/rust.svg"
										className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
										width={28}
										height={8}
									/>
								</Link>
							</li>
							<li>
								<Link href="https://tauri.app/" target="_blank">
									<Image
										alt="Tauri"
										src="/logos/tauri.svg"
										className="h-8 w-28 px-2"
										width={28}
										height={8}
									/>
								</Link>
							</li>
							<li>
								<Link href="https://www.typescriptlang.org/" target="_blank">
									<Image
										alt="TypeScript"
										src="/logos/typescript.svg"
										className="h-8 w-28 px-2 "
										width={28}
										height={8}
									/>
								</Link>
							</li>
							<li>
								<Link href="https://react.dev" target="_blank">
									<Image
										alt="React"
										src="/logos/react.svg"
										className="h-8 w-28 px-2"
										width={28}
										height={8}
									/>
								</Link>
							</li>
							<li>
								<Link href="https://grpc.io/" target="_blank">
									<Image
										alt="gRPC"
										src="/logos/grpc.svg"
										className="h-8 w-28 px-2 brightness-0 dark:invert"
										width={28}
										height={8}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}