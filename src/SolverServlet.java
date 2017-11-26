import jdk.nashorn.internal.runtime.JSONFunctions;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/SolverServlet")
public class SolverServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double a = Double.parseDouble(req.getParameter("coeffA"));
        double b = Double.parseDouble(req.getParameter("coeffB"));
        double c = Double.parseDouble(req.getParameter("coeffC"));

        System.out.println("a: " + req.getParameter("coeffA"));
        System.out.println("b: " + req.getParameter("coeffB"));
        System.out.println("c: " + req.getParameter("coeffC"));
        solve(a, b, c);
//        PrintWriter writer = resp.getWriter();
//        writer.println(a+b+c);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    public String solve(double a, double b, double c) {
        StringBuilder result = null;
        double discr = Math.pow(b, 2) - (4 * a * c);
        System.out.println("discr: " + discr);
        double x1 = 0;
        double x2 = 0;
        if (discr > 0) {
            // r = -b / 2 * a;
            x1 = (-b + Math.sqrt(discr)) / (2 * a);
            x2 = (-b - Math.sqrt(discr)) / (2 * a);
            System.out.println("The equation has two real roots " + x1 + " and " + x2);
            result.append("x1:" + x1 + ", " + "x2:" + x2);
            return String.valueOf(result);
        }
        if (discr == 0) {
            x1 = -b / (2 * a);
            System.out.println("The equation has one root " + x1);
            result.append("x1:" + x1 + ", " + "x2:" + x2);
            return String.valueOf(result);
        }
        if (discr < 0) {
            System.out.println("discr<0");
            x1 = (-b + Math.sqrt(Math.abs(discr))) / (2 * a);
            x2 = (-b - Math.sqrt(Math.abs(discr))) / (2 * a);
            System.out.println("The equation has two real roots " + x1 + "i" + " and " + x2 + "i");
            result.append("x1:" + x1 + "i" + ", " + "x2:" + x2 + "i");
            return String.valueOf(result);
        }
        return null;
    }
}
