# Quiz_App_2

### Get started

``` 
npm i 
npm run dev
npm run json
```

### Dependencies

- `react-router-dom`
- `react-loader-spinner`
- `json-server`
- `polished`
- `framer-motion`
- `styled-components`
- `react-redux`

### ScreenShots
`Main Page Unanswered` 

![main](https://user-images.githubusercontent.com/69297872/127965353-65560a52-27cf-4d1f-9952-53f3b7b505b8.jpeg)

`Main Page Answered` 

![main-answered](https://user-images.githubusercontent.com/69297872/127965374-94cf77fe-6b35-4041-ac26-8b027ce94412.jpeg)

`Audio Page` 
![audio](https://user-images.githubusercontent.com/69297872/127965395-340282c8-af53-4135-b2a3-c97cf974d484.jpeg)

`Travel Page ` 

![travel](https://user-images.githubusercontent.com/69297872/127965546-3d6009dc-2437-49dd-a321-207fb8d1d0d2.jpeg)

## File Structure / Tree
<pre>
root
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│   vite.config.ts
│
├───.vscode
│       settings.json
│
├───assets
│   └───sounds
│           cow.mp3
│           elephant.mp3
│           frog.mp3
│           goat.mp3
│
├───db
│       db.json
│
└───src
    │   App.tsx
    │   global.d.ts
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───components
    │   │   globalData.ts
    │   │
    │   ├───common
    │   │   └───reveal_questions
    │   │       │   QuestionItem.styled.ts
    │   │       │   QuestionItem.tsx
    │   │       │   QuestionList.styled.ts
    │   │       │   QuestionList.tsx
    │   │       │
    │   │       └───styles
    │   │           │   TravelQuestion.scss
    │   │           │
    │   │           └───css
    │   │                   TravelQuestion.min.css
    │   │                   TravelQuestion.min.css.map
    │   │
    │   ├───hooks
    │   │       useFetch.ts
    │   │
    │   ├───pages
    │   │   │   index.ts
    │   │   │
    │   │   ├───add
    │   │   │       Add.styled.ts
    │   │   │       Add.tsx
    │   │   │
    │   │   ├───audio
    │   │   │       Audio.tsx
    │   │   │
    │   │   ├───home
    │   │   │       Home.styled.ts
    │   │   │       Home.tsx
    │   │   │       Menu.styled.ts
    │   │   │       Menu.tsx
    │   │   │       Menu.variant.ts
    │   │   │       Options.styled.ts
    │   │   │       Options.tsx
    │   │   │       Question.styled.ts
    │   │   │       Question.tsx
    │   │   │
    │   │   └───travel
    │   │           Travel.tsx
    │   │
    │   └───redux
    │       │   index.ts
    │       │
    │       ├───actions
    │       │       selectQuestion.ts
    │       │
    │       └───reducers
    │               audioQuestionReducer.ts
    │               questionReducer.ts
    │               questionsListReducer.ts
    │               travelQuestionReducer.ts
    │
    └───styles
        │   globalStyles.scss
        │   globalVariables.scss
        │
        └───css
                globalStyles.min.css
                globalStyles.min.css.map
                globalVariables.min.css
                globalVariables.min.css.map
</pre>
### Made with ♥ by Cheyatz
