export const printFollowers = (followers: number): string => {
    return followers.toLocaleString().replace(/,/g, "")
}