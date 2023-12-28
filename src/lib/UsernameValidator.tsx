import { z} from 'zod'


export const usernameSchema = z.object({
    username: z.string().nonempty('Username is empty')
})