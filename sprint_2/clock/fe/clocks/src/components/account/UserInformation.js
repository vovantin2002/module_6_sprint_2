import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () => {
        try {
            const isLoggedIn = infoAppUserByJwtToken();
            const id = await axios.get(`http://localhost:8080/api/user?userName=${isLoggedIn.sub}`);
            setUser(id.data);
        } catch (e) {
            console.log(e)
        }
        // const userName = infoAppUserByJwtToken();
        // const res = await getUserByUserName(userName);
        // console.log(res)
        // setUser(res.data);
    }
    const infoAppUserByJwtToken = () => {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const result = jwt_decode(jwtToken);
            return result;
        }
    };

    return (
        <>
            <Header/>
            <div className="bg-light " style={{paddingTop:"100px",paddingBottom:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="p-3 border border-2 d-flex bg-white shadow col-lg-5"
                             style={{borderRadius: "20px"}}>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSEhgVFRUYGRgaGhgaGhoYGBwYGBkYGBgZGRgeHBgcIy4lHB4rIRgYJjgmKy8xNjU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJSs2NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAMFAQIGB//EAEIQAAIBAgQDBQUEBwYHAQAAAAECAAMRBBIhMQVBUQYiYXGBEzKRobFCUnLRFGKCksHh8AcjQ6Ky8RUWJDNTY8LS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJhEAAgIBAwMFAQEBAAAAAAAAAAECEQMSITFBUWEEEzKBkSJxQv/aAAwDAQACEQMRAD8A9lhCEACEIQAIQhAAhCEAMQkFXEhedz0EVfGM3ui3zMjLNFbWajBssCbSJsSo5/DWI+yZtz8TJFwvU/CS96T+K/TftxXLJjjl5Ama/p4+6fjKni3GMNhdHa72vkTvPbrlv3R4tYTThvGqeIP91QqlOdRlVKY8mLXY/hBhqy90OodmXH6cPun4zb9OHQzUIv6sx7NTtb0MSnl7oNMOxOuKU8/jJVcHYgxE4UciZocOw1B/hGs018kLRF8MtJi8rVxLLvr5/nGaWMDb6H5fGUjmjLbh+TLxtDUJgGZliYQhCABCEIAEIQgAQhCABCEIxhCEIAEIRTE4nLoN/kJiUlFWxpNukTVawUan05xCpXZ9Bt0H5zFOkXOZvj1jioFFhOWUpZPCKpRj5YtTwv3j6RTi4xKpbCrSzc2diCo8Fy2J82t4GJ9oO1VPDEog9pV+6DYL+JuXkNfLeef8U4pXxbE1ahy8kUlUA6ZB73m1zNRgoj/qReUO1+IwrlMSqVQGtdalP2gN+iEgjXZgviZD2j7bVKndwoZFI1Y2VySNRe5yAbXFz0tz5k0lUdP66Rem92YHQKR4aWvf+HpKUjWhDGFcqc5RHfUnPd0zHnkuA58XzXtewnr3DaDFFVmLFVUM1lFzbkqgADyE8aqVyRoQi9TbMfK+i+tz5T0Xs72kQ01V2COoCkt7rgDQ5tr9b85PKuG1a6jS2dclzx3g9OtTNN1DA6qWAJVhsR4j+U8xpUqK2DUVJG5sBfW/w09Z3XG+0qKhyOHciy5dVW/Mnb0nBGZjFSutl0NRbS35LChiUSxR61Mi1ilRwPLIGyn1H5S5wXaPEpciolZRfu1FCuQBeyulteWqtsZyZqdBf5D4yJqzDUGx5W3+MfttcP8ARvS+UercM7SUqzBHU0qhNsj2IY9Ecd1tttD4S1fDA7afSeLVcXWqKFLAgEHUd7TbUdJe8G7U4qkyrUqBqWmYsntHAH3e+p9SWt0MNDkv6onJaX/J6Orsh8PkY7QxIbTY9PykGGxCVaaujBlYXBGxH8D4cpHVw1tR8PyiTlj43XYy9MudmWcIhh8XbRvj+cfvOmGRTVojKLi9zMIQlBBCEIAEIQgBiEIQAIQimLxGUWG5+UxKSirY4pydI0xWKt3V35npI8PQ5t8Pzhh6N+8fSNTk3m9UvpFnUVSCcD2r7WszNh8K1rGz1RvcbrTPyL+g11Fp274uaFAU0Nnq3UkGzKgHeI8TooPiTuJ55STKLS0UEY3uCgKP6JJ5+JM1LsdlFv1jr8B+ckhGVIsz8wD5XigYVGYLa+l+f9ag/CWBIEUZgKhI5rqeWh/mfhARImGANzqf6+EnAi74pV6k+AuYB3fYZR13b8h84BZJVrBdN26Df16CYF7Xf4f1vMJSCAk+ZJ+pJ3ir1Gqnu3VeuzHy6X6/DrADeriCTlUXPMcl/Ef4f7yWjh+bG5/rYchN6NAKNBJSbamAABCQPiOSi/idB+Z/rWROM3vEkdNl+HP1vAC44P2mfBuQrKyHV6bMACdNQfsttrt1HT1bh2NXEUkqoe66hhfex5HoRsfETw8UlGwA8hadr/Z9xr2bfort3GLNSJ+yzG7JfoxJYX5kjmAE0TnHqd7XoBtRv9Zrhq5U5W2+n8ozIa9G4uN/rIuLi7jyJNNUx0GZiGDr27p9Pyj86sc1JWiUouLoIQhKCCEIQAIQhACKtUCgkyvpIXYlvWbYqpmbKOX15ximmUATjnL3JV0RaK0x8s3AhCV/Hsd+j4WrVG6ocv4z3U/zFYxHnfa/HLWxbKqqFpkrmFruw94k87EZQOVj1lRFVNra3PU7nzk1I3JMoWSpEsITbA4J8W/s6eij/uOdkB2Hix6fSA6EqtQX09Tqf684mlRS6qtzfS2pNyRoOd720H+/qfC+zNCkASgdh9pwGPoNl9PnLj9FTTujTUabGFg0eP0ygOu/z/OP4bDVKv8A2qbv5DKv77WX0vPUv0Vb3trJBRHSK2FI8exPDcRmtUoVNCLKqMy35EkCzH5fWTJg6y/4FXX/ANL/AP50nrZoDpAYcdI7Y6ieQ10qILujoOrIy/NhaJe2X72Y+F2PwG09pqYccpwfbvCIgRwgBLMrWFg1lLqT490/GCfcTSq0clnc7KB4sdfgt/qJg03P2/3VA/1XlpxfA+wqlPsmzIeqnl5g3HoDziUdg0Qpr9trjcHL+W3jNmqFCDfYghhurDVT6EA3mK4sMw3GvmOY/rmBN3TMCOogKj2/h+J9rRp1Pvoj/vKG/jGZUdk8QHwNAqLWpqlhsDT7h+ay3k2RFcTT5j1jODrZhY7iBESUmm/h/CTT0Svo+TValXVFvMTCtcXmZ3EAhCEACQ4mplUn4ecllfj3uwHT6mSyy0xbNQWqVGuETdo3NKS2AE3kIKlRRu2E5X+0WoRgwo2erTB8hmf6oJ1U8/8A7ReLqxTCqDcNnclSB3QVVQSO97xJI0FgOc3HkS5OJJmQbSN918z/AKTN5ouZZmNlXVmIVRfdmIVR8SJ6fwHha4eiiDUjVmtbO595j5n4Cw5Ti+x2E9risxGlNc37b3VflnPwnpKLBjWys3VZIEnO4zjjsSuHVLAkGo4LKWBsQiKQWAN9SQNNLx7s1xN8QtTOEJSpkzoCEfuKx0JNmBYqRc6j0AjEmy1CTISbkzUvHRm2wCSOvUWmhd2VVUEszEBVA3JJ2E3zyt43gxiaDUi2W5Rg2hyujrUQkHcZkFxzEB0zNDjGHqtkSshY3spOVjbfKrWLekpu2XBHxVIBLF1bMATa90ZGF+Rs9x4jlKuqlU/3dSilU7H2dRLHxKVGUr1trbqZ2HC6TrQprVN3CgMb5tR+t9o7C/PeLk18djiuPYSrVwyu9FkqUhdgCjKymwqZcpJIsM4Fge5acmjXF57LVpXnnvazg6UGFSmuVXZg4X3c51BA+zfvbaX13MFtsbe6s52YVbADpMkwjMnpX9nB/wCkfoKr28O4hPzJnWTm+wKFcCgK2Ys7MeTZmJDA8xlyjwII5TpZN8kHyayHEpcX6SeBEzJWqGnTsjwNS4y9PpG5V0jlfwvb0MtJXBK40+hjIqd9zMIQlzBgyqXvVL+N/htLGs1lJ8Ijgl1JnLndyUfsrj2TY3CEIAE4z+0rDg0aVW2qVCl+i1FJPoWRPlOyMrO0fDv0rCVaQtmZbpfYVEs6E+GZVjT3Djc8YqHvJ5n/AEmTReo1wrWtZrkHcaMGB8Rr8JPNlkdn/Z1TvTqt/wCwD92mh/8AoztV0nL9gKJTDtcWz1HcHqNFHr3D8p0uJYhGIFyAbC9rm2gudoh30OTxnCqVIlWxFYprakpVcqnYF1UOqjYEuNtzGcL2rwVELRp1KShdAqvTAHKwXNOWwXZ18e5rcSqlVLFkwyNYAci7DW/z8RtOoo9jeHOmVcNSK9QDm9Xvm+ce3cbTq628nS0qwdQym4IuJkt1iXBuEU8JS9lRUqgJIUsWtmNzqdbQ4rw5q6qodlANyFJXN0BYa2525xMSq9xu84fiNTH4zEOmHQUKKEqa1cZizLuadPY68yPUbTrOH4VcMhVqhbXN3muRewsL62vy6nTpIONcXbDpmWi7AsEDN3FBIJBynvEadBvvBcWwbuWmLOUrdjsfa44nmPR6C5D6XOnpLbspxDE0g9PHey7lsj0zcODe/dG1rDpvtKTF8XxFX3qpUfdRVVfiQW/zRVa9RdqhPg4DA+egPwIk3mXQ7Iehk/k2ekrxOkxsGF/G4+sX4vh1q0XBAYMrfQkEeIIBBnH4HHipdSMrgXKnUEbZlPMfMaeEtqWP9nQq5j3UR38sqkmNTsWT0qhG4v8ASo7E9n0rqa1YZ0DWpqdA5AuzNb3hc2toLg6Tsa/Z/DOmQ0KYFrXRAjDyZbGVnZDEpT4ZTZjYIrlidNnbNe/O99I1huJZ2AbOrMCyhkZVyj7rEWJsQSN9+Qm2zjUbLHgSJSpjDrf+6VQCdSym9m06kNfxHS0tZQ4Rj+l07bGlWv6PRy/C5+MucRWWmhZjZQLkzFk5RqVIlEJSf8zUcpIzXHIixPlHeGcSTELmW4sbEHcGLUhyw5IrVJNI3xi2IMfpNmUHqIpix3fKS4Frp5H+cWJ1ka7mJbxTG4TEJ2EhfGmyGL4Md0+cmx57nqJHhfc+M48m+X6LR+H2TQhCMQSHEVsgFtWJsB9SfACTSpx9ULiUv/43t6umb6J8YxpW6K+v2Zw1Rnd6eZnJLEM6C53sqEAfU8yZxfaXs/8AohDIWakbAFjdkbkCeYPInyNzv3eM4kKdjcamwU3Jc2vZcoJvoTsdAfMVfGsSmKwWIynVUc2YWZHQF1zKejKD42m9RbTQ1wXELTwdJrbU1tbqVldjMazm7NYb2B0AinCxWWgaNVGVqbaHdHRtVKtzAJI5GwFwIhxp+6qcqjWb8Cgsw9bAHwJkpvej0fS441q6kNfHNUPcJVOo95/HX3V+Z8Iq9IN7wzfiJb/VeSQkHJs71BdSy7NYnD4ZnNWiGDKuUqillKlr2JsRcMOf2ZY4ntNR/wAPBhh/7KmUa6HuqHBnOQm45pJUjml6HFKTk73Lf/mWutxSWhRU8qdIZgeuYkqf3YjiuIV6y2q1mcXDWbKBcbd1FAi0Inkk+WUh6bFB2kghNbzaYOg0d8tnG6d4eNhqPUXHrO44Tg1KhmAYNYgHUW3BI58j8Jw1Zwqsx2AJ+AnofCcOadKmp3REU+aqAfpK49zg9ZKlS6ieIwpFYpm7j1Fr2PMKAHUD8Ypv+2Y87SDjbMj4dlVnYuyZVy5ir03JtmIG6Kd/sxnCYOrUYF0yJzDMDUO4tZCVUbG+YnlYbyskecpxityfg9G7NUP4F/CDdjfxaw/YjvEMKKtNkOmYWv0PIyZFCgACwAAAHIDacfxpcV7VlGcqx7oW9rcttplukYwweXJepLruVtXg1dWy+zY9Coup8bzr+z3DTh6Rze8xu3hpYCOcNpulJVqG7BRmPj5841EopblPUesnljodV46mlcXU+Uj4edx5SWpsfIyHh258hBbZUcv/AAywhMwnaRFMf7nqJHhfcHrJsaLofT6xfCHunznHk2y/RaPw+xiEIRiCVfGcGzBaiC7Jm05sjAZ1Hj3VYdSgHO8tIRgm07RyS1UYq4sSAQptqA1sw6j3RceEV4vSDU6j3I/uqqMB9tWQ6EdQdQfEjmZ0OO4OGYshysbkg+6zdTzU+I+EqcbwbEPSenkpd9HS/tWyjMpF/cvzmadnb7uOUd+SxfUeFpynafCBRTddLOVP7asB/mAHrOl4TW9tRR7WJHeB3Vho6nxDBh6TPEOGCtTam1wGG43Ug3VhfmCAfSNxs3jy6GefGbYeg9UAooyH7bmyka6qACW+QN9CZNieHPTrpQrrYOWswvkqKoJsrdTpdDrYNuLE3YkdNcnpLKp/F7FN/wAJq/8AkT9xvrnmrcNrA7UyPxsp+GQ/WXcIhq+5QLhKjOUChbbuxBUX5AA3Y+Gm+8fp8Hp/bzOf1ycv7gsvylhaEOOBNXyLf8Oo2t7Gn+4v5RerwhN0JQ9ASyeqHb9m0sGYAXJAHUmw+Mmw2Bq1jZQUT7VRhY26Ijbn9YjLrpm2moqUtkTnOMFbKjg/CmxFfI2iUmVn6EizooPPN3Sf1b3teeh06VpHgsIlJAqLZR6kk7kk6knmTM4zGCmugLMTZVHvMx2A/PYAEmwE6IxUUeXmzyySsUxNIvi6CjannqOehKNTQeudj+wZdxLhuFKKWcg1HOZyNgeSrf7KjQddTuTHplvc5W7MQhCABCEIAaVPdPkZFw3c+QklY90+U04cNz5TC3yof/LLCExCdpEjrLdSPAxDBHcSylWO7Ut429DtOXOqkpFce6aHYQhEAQhCMDMJiZgIpKuF/RneqtzTds7jfIxHecD7hsCbbG52Js/TdXAZSCCLgjUEHa3URuIHh4BLUzkJNyAO4SdSculib7i1+d5pSNKXRmcVh0qIVdFdTurAMD6GUtbs8v8Ah1XX9UkVF/zd7/NLRmrLvSz+KOv0fL9TE6vEypsaFccr+zJUG9tSt9PHaPZlYzceGVr8GrjZqT+YZPpnmp4VXttSv0ztb45P4Rs9oaI97Ov4kI/n67TUdo8MdBU8BYHXyImHGPY6VnydxdeEVzu1JfEFn+Vl+smXghPvVj+wiqfi5aIVsdT9018QRYmylgbDcBlGe/rzj1Li5KgU8PWe2i3XICBoDme2kNMewPLN8sewvC6VMhguZhqGcl2B/VzaL+zaPNUA3IEpcFSxGL7wrJSQMysif3lRWU2IY3Co2n628tsDwGlTOZi9VzYlqrZ9RqCE91dddAJrg5pZF/pCMU9TSglx997pT9Da7fsgjxEcwHDhTJdmL1CLFyLWG+VF2RfDUnS5J1lhMzNkm2zEIQiEEIQjAIQhACDFN3bdTJcCtl8yYtjG1Aj9JbKB4RYlqyN9hz2ivJJCEzOsiayvx6WYHr/CWMhxFPMpHwkssdUWjUHUrIqbXAM3imEfkY3OeMrRRqmYJnE4/tLUqBlChAdAQTmAB118Z2xEpcf2bpVWLAspOpy2sT1sY5Jvg6PSzwwleVX2Eex+Kds6sxZQARc3sSTpczqYnw7h6UFyqPEk6knxjd4JNKmT9ROOTI5RVIzCEJokZmIE21M5jifbGkhK0Qazi/eU2pA+L/a/ZDekaTfBltLktO0mIalg6zoxV1psVI3B2BF+l5w3C+PHD0wjozhS3fDd4hmLG4PS+5I2inGeI18WCKlTuEghEGVBY3F+bepMr/bbh1I31ALKR5jb1l44ttyXvNO0ej4Op7WmrrcKwDC+9j1tKHi/H2p1XpUkW62u7G9iQD7vLfx8ppwDEZcIgztf2j0d73LL7RGsb2sLjp4Sm4uoTFVsoZu/be/ui2rMet5OEVqaZ05cz0JrqWHZPiCYfFu1V1QVUcszd1WqCojC52Hvv0Gs9IRwwBUgg7EG4PkZ44tEk3c36D7I/M+MYwlV6JvRqPTOvuGyknmUN0Y+JBlJY7do5Y5K2Z67MzhMB2xqppWRag+8nce3ip7rHyKzpuGcew+IOVHAf7j91/3Tv5i8jKEkVU0y0hCEybCEIQAJgzMgxT2W3WZk9KsaVuiGiMz/AD9BLSKYGnZb9fpHJXBGo2+WZyO3XYJmEJYmYhCEYFZiqeVsw2OvrGUfMLyWtTDLYyvpuUax9Zxzj7cr6MtH+o+UOwhCMRmYhCABKLjPaWjhiVvnqbZF2U8sz7L5b+Ei7XYqsqpSoZs1QvmKaOEQDNlN+7vqd7ba2nAsvIjrcee8rCCluyU5tcDWP4tVxd/bN3QSPZrpTFjcXW/eOxu1/C0WilNir2PKynxU+43ne6/ONzpiklsQk2+QhCEYkWHBKTVM9NdWFbCVVHRUrqKzW/A5v4CJYl89as/Wo/wztb6x3sziPZ4+mL/9xXT/ACl//hZVYepnzMObH52P8ZKK/tlZO4IlhCEqSQRRSWbQ7k7bhENhY8rnX/aMVWspI3tp57D52kODQWJG2ir4KndA+Ob4xDOh4f2nrYcd9vaUxuHY5wOeVzr6NcaW0nfcPxiV6SVUvlcZhfQ28R1nFdleFLVY1HUMiGwBAIL2B1B3sCD5kdJ1WBojDBaYH91chOqM7E5T1Uk2B5XA8ZzZNN0joxqWm2WkIQkyhhjEwC7+H0E2xNXkPX8o1hKWUa7mTS9yVdFya+KvqMAWm0ITuIBCEIAYhCEACK4uhmFxuPnGoTEoqSpji3F2isw9a3dPpG5DisNfvLvzHWRUK/Jvj+c5N4PTL6ZZpSVobhARXiOLFGk1QgnKNFHvOxICIv6zMQo8TNmRfAAVFWuTc1FBXoiMAwVfkSeZ8AAOV7X8K9k/tlHcc2b9Wodj5N9fMTr+GUGSiiOQWCjMVGVc27ZRyW97Dpab4zDLVptTcXVgQRtoeh5HxlIvS7QpR1KjyLFCxVttcpPgx0/zZfnJqbXUHnzt1GhHxvM8ZwT0jUoue8oJB+8upR/W3xDDlFcFU3U82dl8QWJPqL7TpTvdHI01sNwhNKz2AJvbMt7C5tmF7DnpG3SBKybA93F4d/u1FX0dlQ/K8VwdPKtvEn6SZKqrWQFQB7SmwbOA4bMtl9luNbA6bXa/Kb0WpnKuZN3DlquVwyswAyZgdSBy2MlrV3RX23pqzWE0oNdFJ5qD8RN7yxEhxL2C/iG/gC3/AMwwSMaaAC7sEAHV3tp6sYhjqpYq2y37g5kWsznwsdP5idb2Cwvt3WsR3KaC1xoajqNvwrm/fExN6VZuEbdHa8HwIoUUQG+Uan7zHV28LsSbTPFyRSzhc2RkdlF7lUcO2W25Frgc7W5x6RYmqERnIJygmyi7G3IAbnwnMddEtGqrKHUhlYBlI1BUi4IPS0jr1raDf6Sv4VelQRCAG1Lge6ruxd7HmLsbR3DYfMcx2+v8pGTcnpiNJJXI3wdC/ePp+cfmBMzqxwUFSJSk5O2ZhMQlDJmExCABCEIAEIQgBgxXEYUNqND9Y3CYlFSVMcZOLtFUlUobEenP0mnFMtSiUDZS9lVtCVf3lYA81y5v2ZZ1KQYaiV9bDFdbXA1vzHL+JnLKEsflFk4y8M2wjOUXOoV7d4KcyhueU816bG3SMRVMR1kwqgxxnFjcWjme3XDBUoPVWwqU0a3RkO6n11B5a9TPPUotTQBhmXcge8p+8vXyGvTx9S7Uv/0dY9EM85SurbH0Ok6sLtM5cypo1p1bKCTmXk429QNj8tOW0k0YciD6giYalrdTlJ3tsfMc/PfxkT0zYnJrY6ocpP0+plSJjEqqU72CjSxtlB1DWudNYYd0YF+73mLa2+1rIHxB9mvf9iwCAMFLtpcNmH2cxK6qTfJrpJOH49c1YjuXVgxZifasEIAVAoCEkgk7/WS1Pmi2hcWNPUC779BqT5AaxbE1QB3xvsmhLfi5AfLz2i6YlgoACppy1PxOnykYG53J3J1J9ZUiBuWLMbsfgByA8J6X2CIXBIAAAr1BYcruT/Geb06bOcqqWY7BQST6Cejdj8NUoYdkqIVJcsASD3SqDltqDpIZ5qK3L4Its6guBFqlW+0KdJn8uvKPUMME8T1nKlLJxsjpbjHyyDD4Pm3w/OPWmbQnVDHGCpEZScnbCEIShkIQhAAhCEACEIQAIQhAAhCEACBhCAC9XDBuVj1EVfCEba/IyyhJSwwl0NxySRz3EcKa1J6TXUOpUm2ovzF5x2I7FuD3KqkdHUr8xeeokSFsMp+yJOOKcPg/0blGXyR5M/ZjFJsoP4XH8SIu3B8WP8N/Qg/Qz104JfGanAjqflNasy6JmPbxvqzx6rwHEuD/AHLk+NuviYxR7L4lix9mFuxIzOm2nQmetfoA6mC4FepMNWZ9EPRjXVnmlDsXVPvui+V3P8Jc4LsbRX3y7npfKPguvznbJhVHL46yYKBsIacsuXX+DXtrhfpS4LhK0xZEVB4AD/f1llSwirvr5xmEccMU7e78g5trsZAmYQljATEzMQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAMwhCABMQhAAgIQgAQmYQAxCEIAZhCEACYhCABCEIAEIQgAQhCAH/2Q==" alt=""
                                 style={{borderRadius: "20px"}}/>
                            <div className="ms-3">
                                <span className="d-block fw-bold ">Hi, {user?.username}!
                                </span>
                                {/*<span className="d-block fw-bold text-secondary">*/}
                                {/*    {user?.userType?.name}<i*/}
                                {/*    className="fas fa-crown"/></span>*/}
                            </div>
                        </div>
                        <div className="col-lg-7 px-3">
                            <div className="row">
                                <div className="p-3 px-5 border border-2  bg-white shadow col-12"
                                     style={{borderRadius: "20px"}}>
                                    <h5 className="text-uppercase">Thông tin cá nhân
                                        </h5>
                                    <div className="row container-fluid">
                                        <span className="d-block fw-bold col-lg-4">Tên </span><span className="col-lg-8">{user?.customers?.name}</span>
                                        <span className="d-block fw-bold col-lg-4">Email </span><span className="col-lg-8">{user?.customers?.email}</span>
                                        <span className="d-block fw-bold col-lg-4">Số điện thoại </span><span className="col-lg-8">{user?.customers?.phoneNumber}</span>
                                        <span className="d-block fw-bold col-lg-4">Ngày sinh</span><span className="col-lg-8">{user?.customers?.birthday}</span>
                                        <span className="d-block fw-bold col-lg-4">Địa chỉ</span><span className="col-lg-8">{user?.customers?.address}</span>
                                        {/*<span className="d-block fw-bold col-lg-4">Weight</span><span className="col-lg-8">{user?.weight} kg</span>*/}
                                        {/*<span className="d-block fw-bold col-lg-4">Height</span><span className="col-lg-8">{user?.height} m</span>*/}
                                    </div>
                                </div>
                                <div className="p-3 px-5 border border-2  bg-white shadow col-12"
                                     style={{borderRadius: "20px"}}>
                                    <h5 className="text-uppercase" >Tài khoản </h5>
                                    <div className="row container-fluid">
                                        <span className="d-block fw-bold col-lg-4">Tên đăng nhập </span><span className="col-lg-8">
                                        {user?.username}
                                    </span>
                                        <span className="d-block fw-bold col-lg-4">Mật khẩu </span><span className="col-lg-8">*********</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Profile;