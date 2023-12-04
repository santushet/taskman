package com.tm.app.domain;

import static com.tm.app.domain.DepartmentTestSamples.*;
import static com.tm.app.domain.EmployeeTestSamples.*;
import static com.tm.app.domain.EmployeeTestSamples.*;
import static com.tm.app.domain.TaskTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.tm.app.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class EmployeeTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Employee.class);
        Employee employee1 = getEmployeeSample1();
        Employee employee2 = new Employee();
        assertThat(employee1).isNotEqualTo(employee2);

        employee2.setId(employee1.getId());
        assertThat(employee1).isEqualTo(employee2);

        employee2 = getEmployeeSample2();
        assertThat(employee1).isNotEqualTo(employee2);
    }

    @Test
    void taskTest() throws Exception {
        Employee employee = getEmployeeRandomSampleGenerator();
        Task taskBack = getTaskRandomSampleGenerator();

        employee.addTask(taskBack);
        assertThat(employee.getTasks()).containsOnly(taskBack);
        assertThat(taskBack.getEmployee()).isEqualTo(employee);

        employee.removeTask(taskBack);
        assertThat(employee.getTasks()).doesNotContain(taskBack);
        assertThat(taskBack.getEmployee()).isNull();

        employee.tasks(new HashSet<>(Set.of(taskBack)));
        assertThat(employee.getTasks()).containsOnly(taskBack);
        assertThat(taskBack.getEmployee()).isEqualTo(employee);

        employee.setTasks(new HashSet<>());
        assertThat(employee.getTasks()).doesNotContain(taskBack);
        assertThat(taskBack.getEmployee()).isNull();
    }

    @Test
    void managerTest() throws Exception {
        Employee employee = getEmployeeRandomSampleGenerator();
        Employee employeeBack = getEmployeeRandomSampleGenerator();

        employee.setManager(employeeBack);
        assertThat(employee.getManager()).isEqualTo(employeeBack);

        employee.manager(null);
        assertThat(employee.getManager()).isNull();
    }

    @Test
    void departmentTest() throws Exception {
        Employee employee = getEmployeeRandomSampleGenerator();
        Department departmentBack = getDepartmentRandomSampleGenerator();

        employee.setDepartment(departmentBack);
        assertThat(employee.getDepartment()).isEqualTo(departmentBack);

        employee.department(null);
        assertThat(employee.getDepartment()).isNull();
    }
}
