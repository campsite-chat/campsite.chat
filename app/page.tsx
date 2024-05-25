import { Campsite } from "../components/icons";

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full min-h-screen justify-center gap-6">
            <Campsite className="w-48 h-full animate-pulse" />
            <h1 className="text-3xl font-bold">Time to cut the cord.</h1>
        </main>
    );
}
