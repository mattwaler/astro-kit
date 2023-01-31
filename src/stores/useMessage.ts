import { atom, useAtom } from "jotai"

const MessageAtom = atom('Hello!')

export default () => useAtom(MessageAtom)
