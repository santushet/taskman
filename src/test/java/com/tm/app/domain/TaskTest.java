package com.tm.app.domain;

import static com.tm.app.domain.EmployeeTestSamples.*;
import static com.tm.app.domain.TaskTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.tm.app.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TaskTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Task.class);
        Task task1 = getTaskSample1();
        Task task2 = new Task();
        assertThat(task1).isNotEqualTo(task2);

        task2.setId(task1.getId());
        assertThat(task1).isEqualTo(task2);

        task2 = getTaskSample2();
        assertThat(task1).isNotEqualTo(task2);
    }

    @Test
    void employeeTest() throws Exception {
        Task task = getTaskRandomSampleGenerator();
        Employee employeeBack = getEmployeeRandomSampleGenerator();

        task.setEmployee(employeeBack);
        assertThat(task.getEmployee()).isEqualTo(employeeBack);

        task.employee(null);
        assertThat(task.getEmployee()).isNull();
    }
}
