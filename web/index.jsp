<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Решайка!</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="table.css">
    <script src="scripts.js"></script>
    <script type="text/javascript" src="jquery-3.2.1.js"></script>
</head>
<body style="background-color: greenyellow">
<h1 align="center">Система для решения квадратных уравнений</h1>
<!--<p align="center"><img src="formula.png" alt="A*x^2+B*x+C=0"></p>-->
<h2 align="center">Введите коэффициенты уравнения</h2>
<div align="center" class="border">
    <form>
        <input id="coeffA" type="number" placeholder="A" required><b>*X<sup>2</sup>+</b>
        <!--pattern="/^-?[0-9]+$/"-->
        <input id="coeffB" type="number" placeholder="B" required> <b>*X<!--<sup>1</sup>-->+</b>
        <input id="coeffC" type="number" placeholder="C" required> <b>= 0</b>
        <hr/>
        <input class="button" type="button" title="Solve" value="Solve" onclick="send_request()"
               onsubmit="send_request()">
    </form>
</div>
<div class="border"></div>
<table class="center">
    <caption>Результаты вычислений</caption>
    <tr>
        <th>Значения коэффициентов</th>
        <th>Результат</th>
    </tr>
</table>
</body>
</html>