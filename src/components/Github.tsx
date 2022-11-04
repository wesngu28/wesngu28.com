import languageList from "../../languages.json";
import useSWR from "swr"

interface Props {
    url: string
}

export default function Github({url}: Props) {
    const swrFetch = async (url: string) => {
        const linguist = await fetch(url);
        const linguini = await linguist.text()
        const langs = await JSON.parse(linguini);
        const counts: Array<number> = Object.values(langs);
        const total = counts.reduce(
            (previousValue: number, currentValue) => previousValue + currentValue,
            0
        );
        Object.keys(langs).map((extension) => {
            langs[extension] = (langs[extension] / total) * 100;
        });
        return langs;
    };
    
    const { data, error } = useSWR(
        `/api/github.json?repo=${url.replace("https://github.com/wesngu28/", "")}`,
        swrFetch,
        {
            refreshInterval: 86400000,
            revalidateOnFocus: false,
        }
    );
    
    return (
        <div className="-my-2 w-full">
        {
            data && Object.keys(data).length > 0
                ? Object.keys(data).map((lang) => {
                      const divStyle = {
                          width: `${data[lang]}%`,
                          backgroundColor: `${
                              (languageList as any)[lang].color
                          }`,
                          color: `${(languageList as any)[lang].color}`,
                      };
                      return (
                          <span
                              title={lang}
                              style={divStyle}
                              className={`inline-block bg-[#3178c6] text-[0.4rem]`}
                              data-view-component="true"
                          >
                              .
                          </span>
                      );
                  })
                : null
        }
        </div>
    )
}