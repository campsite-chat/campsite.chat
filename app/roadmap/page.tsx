import {
	Timeline,
	TimelineContent,
	TimelineDot,
	TimelineHeading,
	TimelineItem,
	TimelineLine,
} from "~/components/ui/timeline"

const preAlphaTimeline = [
	{
		title: "Dark Mode",
		description: "A dark theme for those who prefer the dark side.",
		done: true,
	},
	{
		title: "Authentication",
		description: "Allow users to register and log in to their Campsite account.",
		done: true,
	},
	{
		title: "Profiles",
		description: "Each user can customise their profile to match their style.",
		done: true,
	},
	{
		title: "Friend Requests",
		description: "Allow users to create requests with other users to establish friendships!",
		done: true,
	},
	{
		title: "Direct Messages",
		description: "Communicate with your fellow friends one-on-one in a secure manner.",
	},
	{
		title: "Group Chats",
		description: "A channel with multiple friends and mutuals.",
	},
	{
		title: "Camps",
		description: "A customisable server with groups of channel, which can be used as a place for your friends to hangout, or can be used to host entire communities.",
	},
	{
		title: "Attachments",
		description: "Finally, you can send cat memes to any Direct Message, Group Chat or Camp.",
	},
	{
		title: "Tent",
		description: "Your own private space where you can store files, images and your deepest darkest secrets.",
	},
	{
		title: "Notifications",
		description: "Get notified when someone messages you, or when your friend requests are accepted.",
	},
];

const alphaTimeline = [
	{
		title: "Voice Calls",
		description: "Talk to your friends in real-time with our voice call feature.",
	},
	{
		title: "Video Calls",
		description: "See your friends in real-time with our video call feature.",
	},
	{
		title: "Screen Sharing",
		description: "Share your screen with your friends during a call.",
	},
	{
		title: "Moderation",
		description: "Moderate your Camps and Group Chats with our moderation tools.",
	},
	{
		title: "Custom Emojis",
		description: "Upload your own custom emojis to use in your Camps and Group Chats.",
	},
	{
		title: "Bots",
		description: "Automate your Campsite experience with custom bots.",
	},
	{
		title: "Profile Connections",
		description: "Integrate your favourite services into your Campsite profile and show off where else people can find you.",
	},
	{
		title: "Mobile Support",
		description: "Start intergrating mobile support with Tauri V2.",
	},
];

const privateBetaTimeline = [];
const betaTimeline = [];
const releaseTimeline = [];

function TimeLineCard({ title, description, done = false, last = false }: { title: string; description: string, done?: boolean, last?: boolean }) {
	return (
		<TimelineItem status={done ? "done" : "default"}>
			<TimelineHeading>{title}</TimelineHeading>
			<TimelineDot status={done ? "done" : "default"} />
			{last ? null : <TimelineLine done={done} />}
			<TimelineContent>
				{description}
			</TimelineContent>
		</TimelineItem>
	)
}

export default function RoadmapPage() {
	return (
		<>
			<main className="relative mx-auto my-32 items-center flex flex-col max-w-7xl px-6 text-center md:px-8">
				<h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-5xl md:text-6xl lg:text-7xl dark:from-white dark:to-white/40">
					What's next for Campsite?
				</h1>
				<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					We're working hard to bring you the best experience possible. Here's what we have planned.
				</p>
				<div
					className="animate-fade-up max-w-[800px] mt-16 opacity-0 [--animation-delay:400ms] [perspective:2000px] flex flex-col gap-4 items-start"
				>
					<h2 className="text-2xl font-bold">Pre-Alpha</h2>
					<Timeline>
						{preAlphaTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))}
					</Timeline>
					<h2 className="text-2xl font-bold">Alpha</h2>
					<Timeline>
						{alphaTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))}
					</Timeline>
					<h2 className="text-2xl font-bold">Private Beta</h2>
					<Timeline>
						<span>
							TBA
						</span>
						{/* {privateBetaTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))} */}
					</Timeline>
					<h2 className="text-2xl font-bold">Beta</h2>
					<Timeline>
						<span>
							TBA
						</span>
						{/* {betaTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))} */}
					</Timeline>
					<h2 className="text-2xl font-bold">Release 1.0</h2>
					<Timeline>
						<span>
							TBA
						</span>
						{/* {releaseTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))} */}
					</Timeline>
				</div>
			</main>
		</>
	)
}
