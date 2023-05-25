 // const apik = "353757cc05cd55f2f6c4c6d5bfd6c81f";
            // const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";
            // async function checkweather(){
            //     const response = await fetch(apiUrl + `&appid=${apikey}`);
            //     var data = await response.json();
            //     console.log(data);
            // }
            // checkweather();

            const apikey = "353757cc05cd55f2f6c4c6d5bfd6c81f";
            const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bengaluru";
            async function checkweather(){
                const response = await fetch(apiurl + `&appid=${apikey}`);
                var data = await response.json();
                console.log(data);
            }
            checkweather();