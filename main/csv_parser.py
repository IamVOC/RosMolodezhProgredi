import pandas as pd
import numpy as np

def queryForCSVParse(json):
    df = pd.read_csv('csv/'+json['sheet'][0]+'.csv')
    if("filters" in json):
        for f in json["filters"].items():

            df = df.query(f'`{f[0]}` == {f[1]}')

    if("columns" in json):

        df = df.loc[:, json["columns"]]
    df = df.dropna(axis=0, how='all')
    df = df.dropna(axis=1, how='all')
    df = df.replace({np.nan: None})
    return(df)
