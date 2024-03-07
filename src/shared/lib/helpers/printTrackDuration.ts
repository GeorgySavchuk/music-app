export const printTrackDuration = (duration: number): string => {
    const totalSeconds: number = Math.floor(duration / 1000);

    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;

    const formattedMinutes: string = String(minutes);
    const formattedSeconds: string = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}