# texel-app

Приложение сделано с помощью Vite, Mantine, RTK Query и React Hook Form

## К прочтению

- При запуске приложение получает json из которого берет данные для формирования инпутов, за основу взят файл из тестового задания

 ``` 
   {
      "name": "sample-web-service",
      "title": "Пример веб-сервиса",
      "description": "Описание веб-сервиса",
      "parameters": {
          "input": [
              {
                  "type": "number",
                  "name": "input_num",
                  "title": "Числовое значение, передаваемое на вход программе"
              },
              {
                  "type": "select",
                  "name": "input_text",
                  "title": "Текстовое значение, выбираемое из списка и передаваемое на вход программе",
                  "items": [
                      {"value": "text1", "title": "Первый элемент"},
                      {"value": "text2", "title": "Второй элемент"}
                  ]
              }
          ],
          "output": [
              {
                  "type": "string",
                  "name": "result",
                  "title": "Результат выполнения программы"
              }
          ]
      },
      "commands": {
          "start": "./start.sh ${input_num} ${input_text}"
      }
  }
```
Если нужно, то можно добавить еще инпутов в массив в parameters->input, главное условия: тип может быть только select/number, в имена не должны повторяться.

### Запуск

Для запуска локально ```yarn dev```, для запуска контейнера ``` yarn docker:local ```


