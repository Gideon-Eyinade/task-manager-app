import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
  
    components: [
          {
              path: '~/components',
              pathPrefix: false,
          },
      ],
  
    app: {
          head: {
              title: 'Task Manager App',
  
              meta: [
                  { charset: 'utf-8' },
                  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                  {
                      hid: 'description',
                      name: 'Task Manager App',
                      content:
                          'Task Manager App is to help you manage your tasks',
                  },
              ],
              
            
          },
      },

    css: [
        "~/assets/styles/index.scss",
        "~/assets/fonts/satoshi/satoshi.css"
      ],

      modules: [
		[
			'@pinia/nuxt',

			{
				autoImports: ['defineStore', 'acceptHMRUpdate'],
			},
		],
	],
   
  })
  