from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from main.csv_parser import queryForCSVParse
import numpy as np

@api_view(['GET'])
def case1_views(request):

    if request.method == 'GET':
        json = {
                "sheet": ["P1"],
                "columns": ["Регион", "Направления реализации", "Численность молодежи"],
                "filters":
                    {
                     "Номер строки": [2,3,4,5,6,7]
                    }
                } 
        result = queryForCSVParse(json)
        result.fillna(0)
        rf = result.to_numpy()
        resultDict = dict()
        for i in rf:
            if i[0] not in resultDict:
                resultDict[i[0]] = {i[1]: i[2]}
            else:
                resultDict[i[0]].update({i[1]: i[2]})

        return Response(data = resultDict, status = 200)

@api_view(['GET'])
def raw_views(request):

    if request.method == 'GET':
        json = dict(request.query_params)
        result = queryForCSVParse(json)
        return Response(data = result.to_numpy(), status = 200)

def index(request):
    return render(request, 'main/public/index.html')

# Create your views here.
